import Button from './Button'
import PropTypes from 'prop-types'

const Header = ({ title, onAdd }) => {
    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button color='green' text='Add' onClick={onAdd}/>
        </header>
    )
}

Header.defaultProps = {
    color: 'steelblue'
}

Header.propTypes = {
    color: PropTypes.string,
    text: PropTypes.string,
    onClick: PropTypes.func
}

export default Header
