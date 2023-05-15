import React from 'react';
import './Main.css';

function Main () {
    return (
        <>
            <nav>
                <div className="navBarLogo">
                    <img src="/img/instagram.png" alt="instagram logo" className="icon"/>
                    <p className="logo">Westagram</p>
                </div>
                <div className="searchBar">
                    <input type="text" placeholder="검색" className="searchInput"/>
                    <img src="
                    /img/magnifyingGlass.png" alt="search icon" className="magnifyingGlass"/>
                </div>
                <div className="iconsOnRight">
                    <a href="#"><img src="img/explore.png" alt="explore page" className="icon"/></a>
                    <a href="#"><img src="
                    /img/heart.png" alt="notificaions" className="icon"/></a>
                    <a href="#"><img src="
                    /img/profile.png" alt="my profile" className="icon"/></a>
                </div>
            </nav>

            <main>
                <section className="feed">
                    <article className="post">
                        <header>
                            <div className="userInfo">
                                <img src="
                                /img/feedProfile.jpeg" alt="profile" className="pfp"/>
                                <p className="username bold">hand_jahyun</p>
                            </div>                    
                            <img src="
                            /img/threedots.png" alt="view more" className="icon"/>
                        </header>
                        <img src="
                        /img/feed1.png" alt="uplodaded by the user" className="uploadedImg"/>
                        <div className="interactionBar">
                            <div className="interactionBarLeft">
                                <img src="/img/redheart.png" alt="like" className="icon"/>
                                <img src="
                                /img/comment.png" alt="comment" className="icon"/>
                                <img src="
                                /img/upload.png" alt="share" className="icon"/>
                            </div>
                                <img src="
                                /img/bookmark.png" alt="bookmark" className="icon"/>
                        </div>
                        <div className="likedListContainer">
                            <img src="
                            /img/pfp1.jpeg" alt="profile" className="pfpSmall"/>
                            <p className="likedList"><span className="bold">taylorswift</span>님 외 <span className="bold">10명</span>이 좋아합니다</p>
                        </div>
                        <p className="caption"><span className="username bold">hand_jahyun</span> 제주도 바다~... <span className="light">더 보기</span></p>
                        <section className="commentSection">                        
                            <div className="commentsList">
                                <div className="commentAndBtns" id="likeAndDelete">
                                    <div className="comment">
                                        <span className="bold floatLeft">taylorswift</span> Wow beautiful~                
                                    </div>
                                    <button className="deleteBtn lighter hidden" type="button" id="deleteBtn0">삭제</button>
                                    <button className="likeBtn" type="button" id="likeBtn"><i className='fa fa-heart' id="likeBtn"></i></button>
                                </div>
                            </div>
                            <div className="postComment">
                                <input type="text" placeholder="댓글 달기..." className="commentInput light"/>
                                <button className="commentBtn">게시</button>
                            </div>                        
                        </section>                
                    </article>
                </section>

                <aside className="main-right">
                    <section className="myProfile">
                        <img src="/img/wecode_logo.png" alt="my profile picture" className="myPfp"/>
                        <div className="myHandle">
                            <span className="username bold">wecode_bootcamp</span>
                            <span className="light">WeCode | 위코드</span>
                        </div>                    
                    </section>
                    <section className="story">
                        <div className="header">
                            <span className="light">스토리</span>
                            <span className="viewMoreButton">모두 보기</span>
                        </div>
                        <div className="profileList">
                            <div className="profile">
                                <img src="
                                /img/pfp1.jpeg" alt="profile" className="pfp"/>
                                <div className="otherUserInfo">
                                    <span className="username bold">taylorswift</span>
                                    <span className="light">16분 전</span>
                                </div>   
                            </div>
                            <div className="profile">
                                <img src="
                                /img/pfp2.jpeg" alt="profile" className="pfp"/>
                                <div className="otherUserInfo">
                                    <span className="username bold">billieeilish</span>
                                    <span className="light">3시간 전</span>
                                </div>   
                            </div>
                            <div className="profile">
                                <img src="
                                /img/pfp6.jpeg" alt="profile" className="pfp"/>
                                <div className="otherUserInfo">
                                    <span className="username bold">shawnmendes</span>
                                    <span className="light">20시간 전</span>
                                </div>   
                            </div>
                        </div>                                         
                    </section>

                    <section className="suggestedForYou">
                        <div className="header">
                            <span className="light">회원님을 위한 추천</span>
                            <span className="viewMoreButton">모두 보기</span>
                        </div>
                        <div className="profileList">
                            <div className="profile">
                                <img src="./img/pfp3.jpeg" alt="profile picture" className="pfp"/>
                                <div className="otherUserInfo">
                                    <span className="username bold">kyliejenner</span>
                                    <span className="light">_legend_a님 외 2명이 ...</span>
                                </div>   
                            </div>
                            <div className="profile">
                                <img src="img/pfp4.jpeg" alt="profile picture" className="pfp"/>
                                <div className="otherUserInfo">
                                    <span className="username bold">arianagrande</span>
                                    <span className="light">ringo.in.seoul님 외 12...</span>
                                </div>   
                            </div>
                            <div classNameName="profile">
                                <img src="./img/pfp5.jpeg" alt="profile picture" className="pfp"/>
                                <div className="otherUserInfo">
                                    <span className="username bold">justinbieber</span>
                                    <span className="light">jimmylee1220님 외 1...</span>
                                </div>   
                            </div>
                        </div>  
                    </section>
                    <footer>
                        <p className="lighter">Instagram 정보 • 지원 • 홍보 센터 • API • 채용 정보 • 
                            개인정보처리방침 • 약관 • 디렉터리 • 프로필 • 해시태그 • 언어 </p>
                        <p className="lighter">© 2023 INSTAGRAM</p>
                    </footer>
                </aside>
            </main> 
        </>
    );
};

export default Main;