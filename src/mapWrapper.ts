export interface Mappable {
  location: {
    lat: number;
    lng: number;
  };

  markerContent(): string;
}

export class mapWrapper {
  private googleMap: google.maps.Map;

  constructor(divId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(divId), {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0,
      },
    });
  }

  addMarker(markingpoint: Mappable): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: markingpoint.location.lat,
        lng: markingpoint.location.lng,
      },
    });
    marker.addListener("click", () => {
      const infowindow = new google.maps.InfoWindow({
        content: markingpoint.markerContent(),
      });

      infowindow.open(this.googleMap, marker);
    });
  }
}
