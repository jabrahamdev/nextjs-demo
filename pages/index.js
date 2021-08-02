import { Fragment, useEffect, useState } from "react";
import MeetupList from "../components/meetups/MeetupList";

// Import MongoClient to get the data there as static props
import { MongoClient } from "mongodb";

// Import Head Component  from next to improve SEO Metadata
// Return it as JSX, wrap in a Fragment if needed
import Head from "next/head";

// const DUMMY_MEETUPS = [
//   {
//     id: "m1",
//     title: "A First Meetup",
//     image:
//       "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg",
//     address: "Some address 5, 12345 Some City",
//     description: "This is a first meetup!",
//   },
//   {
//     id: "m2",
//     title: "A Second Meetup",
//     image:
//       "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg",
//     address: "Some address 10, 12345 Some City",
//     description: "This is a second meetup!",
//   },
// ];

const HomePage = (props) => {
  // const [loadedMeetups, setLoadedMeetups] = useState([]);
  // useEffect(() => {
  //   setLoadedMeetups(DUMMY_MEETUPS)
  // }, []);

  return (
    <Fragment>
      <Head>
        <title>React Meetups</title>
        <meta name="description" content="" />
      </Head>
      <MeetupList meetups={props.meetups} />
    </Fragment>
  );
};

// Instead of useState and useEffect, nextjs enables a function that gets
// called in build time and can be used for pre-rendering fetched data into
// the site. Function must return an object with at least a props property
// that will be passed to the page component.
// NEXTJS asks to export this function, it works ONLY ON PAGES components.
export const getStaticProps = async () => {
  // fetch data
  const client = await MongoClient.connect(
    `mongodb+srv://admin-jabraham:dunkel1mongo@cluster0.e4adw.mongodb.net/meetups?retryWrites=true&w=majority`
  );

  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  // Call .find().toArray() on meetupsCollection to get all meetups
  // within an array
  const meetups = await meetupsCollection.find().toArray();

  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    // The revalidate property sets how often the page must be re-generated
    // in seconds.
    revalidate: 1,
  };
};

// Next.js will pre-render this page on each request using the data returned
// by getServerSideProps (ON THE SERVER AFTER DEPLOYMENT)
// export const getServerSideProps = async () => {
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// };

export default HomePage;
