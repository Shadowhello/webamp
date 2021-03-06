import React from "react";
import { connect } from "react-redux";
import { setSkinFromUrl, openSkinFileDialog } from "../actionCreators";
import { Hr, Node, Parent } from "./ContextMenu";

const SkinContextMenu = props => (
  <Parent label="Skins">
    <Node onClick={props.openSkinFileDialog} label="Load Skin..." />
    {!!props.availableSkins.length && <Hr />}
    {props.availableSkins.map(skin => (
      <Node
        key={skin.url}
        onClick={() => props.setSkin(skin.url)}
        label={skin.name}
      />
    ))}
  </Parent>
);

const mapStateToProps = state => ({
  availableSkins: state.settings.availableSkins
});

const mapDispatchToProps = {
  openSkinFileDialog,
  setSkin: setSkinFromUrl
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SkinContextMenu);
