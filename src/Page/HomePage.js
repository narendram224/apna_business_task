import React from "react";
import MainLayout from "../styled/MainLayout";
import NavBar from "../components/organism/NavBar";
import Skelton from "../components/Skelton";
import ListContent from "../components/molecules/ListContent";
import CardComponent from "../components/atoms/CardComponent";
import { useSelector } from "react-redux";
import { isoDateConverter } from "../Helper/IsoDateConverter";
import { useHistory } from "react-router-dom";

const HomePage = () => {
  const history = useHistory(); //get the history data
  const initialstate = useSelector((state) => state.search); //get the initial state for search
  const searchedResult = initialstate.searchResult; //get search result
  const loading = initialstate.loading.query; //get loading data while fetch data
  const error = initialstate.error.query; //get error while fetch data

  // navigate to the detail page with taking object id
  const navigateToDetail = (objectId) => {
    history.push(`/detail/${objectId}`);
  };

  return (
    <div>
      <NavBar />
      <MainLayout>
        {loading && <Skelton profile={false} />}

        {!loading && searchedResult.length > 0
          ? searchedResult.map((sItem) => {
              return (
                <CardComponent
                  key={sItem["objectID"]}
                  onClick={() => navigateToDetail(sItem["objectID"])}
                >
                  <ListContent
                    title={sItem["title"]}
                    body={sItem["author"]}
                    subtitle={isoDateConverter(sItem["created_at"])}
                  />
                </CardComponent>
              );
            })
          : !loading &&
            searchedResult.length === 0 && (
              <CardComponent>
                {error && <ListContent title={error} icon={false} />}
                {initialstate.initial ? (
                  <ListContent
                    title="Find hacker new by searching"
                    icon={false}
                  />
                ) : (
                  <ListContent title="No Data Found" icon={false} />
                )}
              </CardComponent>
            )}
      </MainLayout>
    </div>
  );
};

export default HomePage;
