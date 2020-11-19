import React, {Component} from 'react';
import 'antd/dist/antd.css';
import { Modal, Button } from 'antd';

class ProfilePicChange extends Component {
    constructor(props) {
        super(props);
        this.state= {
            visible: false,
            imagesArray: [
                          props.pic1, props.pic2, props.pic3, props.pic4,
                          props.pic5, props.pic6, props.pic7, props.pic8,
                          props.pic9, props.pic10, props.pic11,props.pic12,
                        ]
        }
    }


    showModal = () => {
      this.setState({
        visible: true,
      });
    };
  
    handleOk = e => {
      console.log(e);
      this.setState({
        visible: false,
      });
    };
  
    handleCancel = e => {
      console.log(e);
      this.setState({
        visible: false,
      });
    };


    render() {
        const imageMapper = this.state.imagesArray.map((image, index) => {
            return(
                <img src={image}
                alt="img"
                onClick={() => this.props.handleImageChange(image)}
                height="48px"
                />
            )
        })
        return(
        <div className="ProfilePicChanger">
        
        <Button ghost="true" danger="true" size="middle" onClick={this.showModal}>
          Changer d'avatar
        </Button>
        <Modal
          okType="danger"
          title="Choisissez un avatar parmi les personnage ci-dessous"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
        
        {imageMapper}

        </Modal>
        
        </div>
        )}
}

export default ProfilePicChange;