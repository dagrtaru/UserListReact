import React, { Component } from 'react'

export class Activity extends Component {

    componentDidMount(){
        //Get modal element
        const modal = document.getElementsByClassName('modal');
        //Get open modal button as an array
        const modalBtn = document.getElementsByClassName('button');
        //Get close modal button
        const closeBtn = document.getElementsByClassName('closeBtn');

        //Listen for a click on open modal
        Array.prototype.forEach.call(modalBtn, (btn, index) => {
            btn.addEventListener('click', () => {
                modal[index].style.display = 'block';
            });
        });

        //Listen for a click on close modal
        Array.prototype.forEach.call(closeBtn, (btn, index) => {
            btn.addEventListener('click', () => {
                modal[index].style.display = 'none';
            });
        });

        //Listen for outside clicks
        window.addEventListener('click', (e) => {
            for(var i = 0; i < modalBtn.length; i++){
                if(e.target == modal[i])modal[i].style.display = 'none';
            }
        });
    }

    render() {
        return (
            <div>
                Start Time: {this.props.activity.start_time} {' '}
                End Time: {this.props.activity.end_time}
            </div>
        )
    }
}

export default Activity
