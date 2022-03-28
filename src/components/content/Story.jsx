import { Item } from "./Item";
import "./story.css";

export const Story = () => {
  return (
    <div className="story">
      <Item
        image="https://c.tenor.com/rkI1a8s2Z6QAAAAC/todd-howard-it-just-works.gif"
        profilePic="https://avatars.githubusercontent.com/u/93376461?v=4"
        title="YEAH"
      />
      <Item
        image="https://c.tenor.com/PgVIwnUksdAAAAAC/it-works-yes.gif"
        profilePic="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Dwayne_Johnson_2014_%28cropped%29.jpg/640px-Dwayne_Johnson_2014_%28cropped%29.jpg"
        title="It ROCKS"
      />
      <Item
        image="https://s3.scoopwhoop.com/anj/dhoni_gifs/684602456.gif"
        profilePic="https://images.assettype.com/freepressjournal/2019-11/aaa2715a-7c3a-4c82-8a81-68f02344749b/Dhoni_2.jpg?rect=0%2C0%2C3900%2C2048&w=1200&auto=format%2Ccompress&ogImage=true"
        title="MAHIYA"
      />
      <Item
        image="https://thumbs.gfycat.com/SophisticatedVagueAmethystsunbird-size_restricted.gif"
        profilePic="https://www.bollywoodhungama.com/wp-content/uploads/2022/01/Hrithik-Roshan-adopts-a-puppy-names-him-Mowgli-on-his-birthday-eve-Varun-Dhawan-says-%E2%80%98best-decision%E2%80%99.jpeg"
        title="JADDOO"
      />
      <Item
        image="https://media0.giphy.com/media/YpxRFISLsRAxIbUbyQ/giphy.gif?cid=ecf05e4760n8n3qvfp2zi55fo6r41fchh2v0dg7fyfl3wkck&rid=giphy.gif&ct=g"
        profilePic="https://deadline.com/wp-content/uploads/2021/06/TedCropped.png"
        title="TED"
      />
    </div>
  );
};
