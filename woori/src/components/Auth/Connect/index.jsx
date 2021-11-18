import React from 'react';

function Connect () {
    return (
        <div>
            <h3>서로의 초대코드를 입력하여 연결해주세요</h3>
            <form>
                <input type="text" ></input>
                <input type="text" placeholder="상대방의 초대코드를 입려해주세요"></input>
                <button>연결하기</button>
            </form>
        </div>
    );
};

export default Connect;