import React, { Component } from "react";
import View from "../View/View";

import "./ImageList.css";

export default class ImageList extends Component {
  returnImageList = () => {
    const list = this.props.data.results.map((result) => {
      const view = {
        // URL, width, height, id and download properties of view
        url: result.urls.small,
        width: result.width,
        height: result.height,
        id: result.id,
        download: result.urls.raw,
      };
      const user = {
        // id, username, name and image properties of user
        id: result.user.id,
        username: result.user.username,
        name: result.user.name,
        image: result.user.profile_image.medium,
      };
      // returns images page
      return <View key={result.id} view={view} user={user} />;
    });

    return list;
  };

  render() {
    return (
      <div>
        <div className="image-list">{this.returnImageList()}</div>
      </div>
    );
  }
}
