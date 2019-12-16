import React, { Component } from "react";
import "./CharacterItem.scss";

export class CharacterItem extends Component {
    render() {
        const { name, image, id, status, species, gender, origin, location } = this.props.data;
        return (
            <div className="character-item">
                <div className="character-panel">
                <div
                    className={`character-item__thumb ${
                        gender.toUpperCase() === "MALE"
                            ? "thumb-male"
                            : "thumb-female"
                    }`}
                >
                    <figure className="item-thumb-wrap">
                        <img
                            src={image}
                            alt={name}
                            className="item-thumb-image"
                        />
                    </figure>
                </div>
                <h2 className="character-item__title"><span>{name}</span></h2>
                <div className="character-item_details">
                    <h4><span className="character_infoType">Id: </span><span className="character-item_info">{id}</span></h4>
                    <h4><span className="character_infoType">Status:</span> <span className="character-item_info">{status}</span></h4>
                    <h4><span className="character_infoType">Species:</span> <span className="character-item_info">{species}</span></h4>
                    <h4><span className="character_infoType">Gender:</span> <span className="character-item_info">{gender}</span></h4>
                    <h4><span className="character_infoType">Origin:</span> <span className="character-item_info"><a href={origin.url}>{origin.name}</a></span></h4>
                    <h4><span className="character_infoType">Last Location:</span> <span className="character-item_info"><a href={location.url}>{location.name}</a></span></h4>
                </div>
                </div>
            </div>
        );
    }
}

export default CharacterItem;
