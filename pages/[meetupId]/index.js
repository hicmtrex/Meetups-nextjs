import MeetupDetails from "../../components/meetups/MeetupDetails";
import { MongoClient, ObjectId } from "mongodb";
import Head from "next/head";

const meetUpId = (props) => {
  const { image, title, address, description } = props.meetupData;
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='desciption' content={description} />
      </Head>
      <MeetupDetails
        image={image}
        title={title}
        address={address}
        description={description}
      />
    </>
  );
};

export const getStaticPaths = async () => {
  const client = await MongoClient.connect("mongodb://localhost:27017/next-js");
  const db = client.db();
  const meetupsCollection = db.collection("next-js");
  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();
  client.close();
  return {
    fallback: false,
    paths: meetups.map((meetup) => ({
      params: { meetupId: meetup._id.toString() },
    })),
  };
};

export const getStaticProps = async (context) => {
  const meetupId = context.params.meetupId;
  const client = await MongoClient.connect("mongodb://localhost:27017/next-js");
  const db = client.db();
  const meetupsCollection = db.collection("next-js");
  const selectedMeetup = await meetupsCollection.findOne({
    _id: ObjectId(meetupId),
  });
  client.close();

  return {
    props: {
      meetupData: {
        id: selectedMeetup._id.toString(),
        title: selectedMeetup.title,
        address: selectedMeetup.address,
        image: selectedMeetup.image,
        description: selectedMeetup.description,
      },
    },
  };
};

export default meetUpId;
