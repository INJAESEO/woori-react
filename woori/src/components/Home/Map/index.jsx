/*global kakao*/
import React, { useEffect, useRef } from "react";
import * as S from "./style";

const Map = ({ placeList, setPlace }) => {
  const container = useRef(null);

  useEffect(() => {
    mapscript();
  }, []);

  const mapscript = () => {
    let options = {
      center: new kakao.maps.LatLng(37.5898422803883, 127.031685000726),
      level: 5,
    };

    //map
    const map = new kakao.maps.Map(container.current, options);
    var geocoder = new kakao.maps.services.Geocoder();

    placeList.forEach((el) => {
      // 마커를 생성합니다
      const marker = new kakao.maps.Marker({
        //마커가 표시 될 지도
        map: map,
        //마커가 표시 될 위치
        position: new kakao.maps.LatLng(el.latitude, el.longitude),
      });
      // 마커에 표시할 인포윈도우를 생성합니다
      var infowindow = new kakao.maps.InfoWindow({
        content: el.name, // 인포윈도우에 표시할 내용
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
      // 마커에 클릭 이벤트를 등록한다 (우클릭 : rightclick)
      kakao.maps.event.addListener(marker, "click", function () {
        setPlace(() => el.id);
      });

      // 현재 지도 중심좌표로 주소를 검색해서 지도 좌측 상단에 표시합니다
      searchAddrFromCoords(map.getCenter(), displayCenterInfo);
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

    // 중심 좌표나 확대 수준이 변경됐을 때 지도 중심 좌표에 대한 주소 정보를 표시하도록 이벤트를 등록합니다
    kakao.maps.event.addListener(map, "idle", function () {
      searchAddrFromCoords(map.getCenter(), displayCenterInfo);
    });

    function searchAddrFromCoords(coords, callback) {
      // 좌표로 행정동 주소 정보를 요청합니다
      geocoder.coord2RegionCode(coords.getLng(), coords.getLat(), callback);
    }

    // 지도 좌측상단에 지도 중심좌표에 대한 주소정보를 표출하는 함수입니다
    function displayCenterInfo(result, status) {
      if (status === kakao.maps.services.Status.OK) {
        var infoDiv = document.getElementById("centerAddr");

        // for (var i = 0; i < result.length; i++) {
        //   // 행정동의 region_type 값은 'H' 이므로
        //   if (result[i].region_type === "H") {
        //     infoDiv.innerHTML = result[i].address_name;
        //     break;
        //   }
        // }
      }
    }
  };

  return (
    <div>
      <S.Container ref={container}>
        <div className="hAddr">
          <span className="title">지도중심기준 행정동 주소정보</span>
          <span id="centerAddr"></span>
        </div>
      </S.Container>
    </div>
  );
};

export default Map;
