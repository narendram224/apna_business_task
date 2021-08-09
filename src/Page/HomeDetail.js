import React,{ useEffect }  from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import CardComponent from "../components/atoms/CardComponent";
import CommentCard from "../components/molecules/CommentCard";
import ListContent from "../components/molecules/ListContent";
import SkeltonComp from "../components/atoms/Skelton";
import { isoDateConverter } from "../Helper/IsoDateConverter";
import { fetchCommentDetail } from "../redux/search/searchAction";

const HomeDetail = () => {
  let { id } = useParams();
  const dispatch = useDispatch();

  const initialstate = useSelector((state) => state.search);
  const comments = initialstate.commentsDetails; //get detail comment data
  const loading = initialstate.loading.comment; //get loading data while comment fetch
  const error = initialstate.error.comment; //get error data while comment fetch
// call api for comment data if id change 
  useEffect(() => {
    dispatch(fetchCommentDetail(id));
  }, [id]);
  return (
    <HomeDetailWrapper>
      {loading && (
        <SkeltonWrapper>
          <SkeltonComp />
          <SkeltonComp />
          <SkeltonComp />
          <SkeltonComp />
          <SkeltonComp />
        </SkeltonWrapper>
      )}
      {!loading && error.length === 0 && (
        <CardComponent>
          <ListContent
            title={comments["title"]}
            body={comments["author"]}
            subtitle={isoDateConverter(comments["created_at"])}
            icon={false}
            point={comments["points"]}
          />
          <ReplyWrapper>
            Reply {comments.children && comments.children.length}
          </ReplyWrapper>
          {comments["children"] && comments["children"].length > 0 ? (
            <>
              {comments.children.map((comment) => {
                return (
                  <CommentCard
                    key={comment["id"]}
                    title={comment["author"]}
                    body={comment["text"]}
                    date={isoDateConverter(comment["created_at"])}
                  />
                );
              })}
            </>
          ) : (
            <ListContent title={"No comments found"} icon={false} />
          )}
        </CardComponent>
      )}
      {error.length > 0 && (
        <ListContent title={"Got error while fetching the data"} icon={false} />
      )}
    </HomeDetailWrapper>
  );
};
const ReplyWrapper = styled.div`
  margin: 0;
  margin-top: 2rem;
  border-bottom: 2px solid var(--primary-blue);
  width: 105px;
  padding-bottom: 0.3rem;
  font-size: 1.4rem;
  font-weight: 700;

`;

const HomeDetailWrapper = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const SkeltonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
`;
export default HomeDetail;
