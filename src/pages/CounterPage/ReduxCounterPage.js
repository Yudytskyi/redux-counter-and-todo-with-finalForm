import { connect } from 'react-redux';
import CounterPage from './CounterPage';
import {
  createCounterIncrementAction,
  createCounterDecrementAction,
  createCounterSetStateAction,
} from '../../Redux/actions/counter';

const mapStateToProps = ({ counter }) => counter;
const mapDispatchToProps = dispatch => ({
  increment: () => dispatch(createCounterIncrementAction()),
  decrement: () => dispatch(createCounterDecrementAction()),
  setStep: s => dispatch(createCounterSetStateAction(s)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CounterPage);
