import PropTypes from 'prop-types';

const Btn = ({text, cla, click})=>{

    return <button className={cla} onClick={click}>{text}</button>
}

Btn.propTypes = {
    text: PropTypes.string.isRequired,
    cla: PropTypes.string.isRequired,
    click: PropTypes.func.isRequired,
};

export default Btn

