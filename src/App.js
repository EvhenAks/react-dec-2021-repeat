import Users from "./components/Users/Users";
import Posts from "./components/Posts/Posts";
import Comments from "./components/Commetns/Comments";
import './App.css'

export const App = () => {
    return (
        <div>
            <div className={'users_posts'}>
                <Users/>
                <Posts/>
            </div>
            <Comments/>
        </div>
    )
}