import React from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";

// 이 함수는 upload와 detail에서 사용할 것
// detail 페이지에서는 setCustomValue를 못쓰게 하려고 옵셔널로 둔다.

interface KakaoMapProps {
  latitude: number;
  longitude: number;
  customSetValue?: (id: string, value: number) => void;
  detailPage?: boolean;
}

const KakaoMap = ({
  latitude,
  longitude,
  customSetValue,
  detailPage = false, // 상세페이지에서 사용하는지 여부
}: KakaoMapProps) => {
  const handleClick = (mouseEvent: kakao.maps.event.MouseEvent) => {
    if (detailPage) return;

    customSetValue!("latitude", mouseEvent.latLng.getLat());
    customSetValue!("longitude", mouseEvent.latLng.getLng());
  };

  return (
    <Map
      center={{ lat: latitude, lng: longitude }}
      style={{ width: "100%", height: "360px" }}
      onClick={(_, mouseEvent) => handleClick(mouseEvent)}
    >
      <MapMarker position={{ lat: latitude, lng: longitude }}></MapMarker>
    </Map>
  );
};

export default KakaoMap;
