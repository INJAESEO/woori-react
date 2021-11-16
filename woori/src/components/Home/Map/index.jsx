/*global kakao*/
import React, { useEffect } from "react";
import * as S from "./style";

export const markerdata = [
  {
    title: "콜드스퀘어",
    lat: 37.62197524055062,
    lng: 127.16017523675508,
  },
  {
    title: "하남돼지집",
    lat: 37.620842424005616,
    lng: 127.1583774403176,
  },
  {
    title: "수유리우동",
    lat: 37.624915253753194,
    lng: 127.15122688059974,
  },
  {
    title: "맛닭꼬",
    lat: 37.62456273069659,
    lng: 127.15211256646381,
  },
];

const Map = () => {
  useEffect(() => {
    mapscript();
  }, []);

  const mapscript = () => {
    let container = document.getElementById("map");
    let options = {
      center: new kakao.maps.LatLng(37.624915253753194, 127.15122688059974),
      level: 5,
    };

    //map
    const map = new kakao.maps.Map(container, options);
    markerdata.forEach((el) => {
      // 마커를 생성합니다
      const marker = new kakao.maps.Marker({
        //마커가 표시 될 지도
        map: map,
        //마커가 표시 될 위치
        position: new kakao.maps.LatLng(el.lat, el.lng),
      });
      // 마커에 표시할 인포윈도우를 생성합니다
      var infowindow = new kakao.maps.InfoWindow({
        content: el.title, // 인포윈도우에 표시할 내용
      });

      // 마커에 mouseover 이벤트와 mouseout 이벤트를 등록합니다
      // 이벤트 리스너로는 클로저를 만들어 등록합니다
      // 클로저를 만들어 주지 않으면 마지막 마커에만 이벤트가 등록됩니다
      kakao.maps.event.addListener(
        marker,
        "mouseover",
        makeOverListener(map, marker, infowindow)
      );
      kakao.maps.event.addListener(
        marker,
        "mouseout",
        makeOutListener(infowindow)
      );
    });
    // 인포윈도우를 표시하는 클로저를 만드는 함수입니다
    function makeOverListener(map, marker, infowindow) {
      return function () {
        infowindow.open(map, marker);
      };
    }

    // 인포윈도우를 닫는 클로저를 만드는 함수입니다
    function makeOutListener(infowindow) {
      return function () {
        infowindow.close();
      };
    }
  };

  return (
    <div>
      <S.Container id="map"></S.Container>
    </div>
  );
};

export default Map;
