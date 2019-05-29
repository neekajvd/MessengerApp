import { connect } from 'react-redux'
import Footer from '../component/Footer'


const mapDispatchToProps = dispatch => ({
    dispatch: dispatch
  })

const mapStateToProps = state => ({
    chatid: state.chatid
  })

const FooterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Footer)

export default FooterContainer