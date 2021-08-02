import MeetupDetail from "../../components/meetups/MeetupDetail";

import { MongoClient, ObjectId } from "mongodb";
import { Fragment } from "react";
import Head from 'next/head'

const MeetupDetails = (props) => {
  return (
    <Fragment>
      <Head>
        <title>{props.meetupData.title}</title>
      </Head>
      <MeetupDetail
        image={props.meetupData.image}
        title={props.meetupData.title}
        address={props.meetupData.address}
        description={props.meetupData.description}
      />
    </Fragment>
  );
};

export const getStaticPaths = async () => {
  // Fetch data from Mongo
  const client = await MongoClient.connect(
    `mongodb+srv://admin-jabraham:dunkel1mongo@cluster0.e4adw.mongodb.net/meetups?retryWrites=true&w=majority`
  );

  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  // Get all the meetups in the db, but bring ONLY the _id's in an array
  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();

  client.close();

  return {
    // If fallback is false, then any paths not returned by getStaticPaths
    // will result in a 404 page.
    fallback: false,
    paths: meetups.map((meetup) => ({
      params: { meetupId: meetup._id.toString() },
    })),
    // paths: [
    //   {
    //     params: {
    //       meetupId: "m1",
    //     },
    //   },
    //   {
    //     params: {
    //       meetupId: "m2",
    //     },
    //   },
    // ],
  };
};

export const getStaticProps = async (context) => {
  // Get id from route within the context.params
  const meetupId = context.params.meetupId;

  console.log(meetupId);

  // fetch data for a single meetup
  const client = await MongoClient.connect(
    `mongodb+srv://admin-jabraham:dunkel1mongo@cluster0.e4adw.mongodb.net/meetups?retryWrites=true&w=majority`
  );

  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  // Call .find().toArray() on meetupsCollection to get all meetups
  // within an array
  const meetup = await meetupsCollection.findOne({ _id: ObjectId(meetupId) });

  console.log("meetup: ", meetup);

  client.close();

  return {
    props: {
      meetupData: {
        image: meetup.image,
        id: meetup._id.toString(),
        title: meetup.title,
        address: meetup.address,
        description: meetup.description,
      },
    },
  };

  // return {
  //   props: {
  //     meetupData: {
  //       image:
  //         "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg",
  //       id: meetupId,
  //       title: "First Meetup",
  //       address: "Some Street 5, Some City",
  //       description: "This is a first meetup",
  //     },
  //   },
  // };
};

export default MeetupDetails;
