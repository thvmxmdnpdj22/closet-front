import React,{useState} from "react";
import PostPagePresenter from "./PostPagePresenter";
import { useNavigate } from "react-router-dom";

const PostPageContainer = () => {

    const navigate = useNavigate();
    
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title || !content) {
            alert("제목과 내용을 모두 입력해주세요.");
            return; // 제목 또는 내용이 비어있으면 함수 실행 중지
        }
        const postContent = { title: title, content: content };
        const posts = JSON.parse(localStorage.getItem('post'));
        if (!posts) {
            const postArr = [postContent];
            localStorage.setItem('post', JSON.stringify(postArr));
            navigate("/community");
            return;
        }
        posts.push(postContent);
        localStorage.setItem('post', JSON.stringify(posts));
        console.log(postContent);
        navigate("/community");
    };

    return (
        <PostPagePresenter
            navigate={navigate}
            handleSubmit={handleSubmit}
            title={title}
            setTitle={setTitle}
            content={content}
            setContent={setContent}
        />
    );
};


export default PostPageContainer;