import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchCommentDetail } from '../redux/search/searchAction';

const HomeDetail = () => {
    let { id } = useParams();
    const dispatch = useDispatch()

    const initialstate = useSelector((state)=>state.search)
    const comments =initialstate.commentsDetails;
console.log("commetn detail",comments);
    useEffect(() => {

        dispatch(fetchCommentDetail(id))
        
    }, [id])
    return (
        <div>
            home detail Page
        </div>
    )
}

export default HomeDetail
