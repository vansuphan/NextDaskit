import MasterPage from "components/page/MasterPage";
import resource from "plugins/assets/resource";
import CONFIG from "web.config";
import FullScreenLayout from "components/layout/FullscreenLayout";
import {FormLogin} from "components/FormLogin";

// context
import MainContentProvider from "contexts/MainContentContext"
import HeaderProvider from "contexts/HeaderContext";
//

const dataTest = [
  {
      title:"Hello guy",
      textContent: "It's a broader card with text below as a natural lead-in to extra content.",
      timer: 1, 
  },
  {
    title: "Alphazap",
    textContent: "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
    timer: 65
  }, {
    title: "Voyatouch",
    textContent: "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
    timer: 59
  }, {
    title: "Lotlux",
    textContent: "Fusce consequat. Nulla nisl. Nunc nisl.",
    timer: 17
  }
]

export async function getServerSideProps(context) {
  // const params = context.params;
  // const query = context.query;
  // context.req.session ,
  // context.res
  

  console.log("SERVER CODE");

  var json = { data: [1, 2, 3, 4, 5] };

  return {
    props: {
      // params
      // query
    },
  };
}

export default function Home(props) {
  // console.log(props.query);
  if (typeof window == "undefined") {
    console.log("This code is on server-side");
  }

  return (
    <MasterPage>
      <MainContentProvider>
      <FullScreenLayout>
        <HeaderProvider>
            <FormLogin> </FormLogin>
        </HeaderProvider>
      </FullScreenLayout>
      </MainContentProvider>
    </MasterPage>
  );
}
