import TestRenderer from 'react-test-renderer';
import NumButton from '../src/components/NumButton';
import App from '../App';
import SpecialFunc from '../src/components/SpecialFunc';
import NumColumn from '../src/components/NumColumn';

describe('Testing the UI', () => {
  const app = TestRenderer.create(<App></App>).toJSON();

  const normalButton = TestRenderer.create(
    <NumButton
      num={'DEL'}
      last={false}
      special={false}
      handleFunc={(btn) => console.log(btn)}
    />,
  ).toJSON();

  const specialFunc = TestRenderer.create(
    <SpecialFunc handleFunc={(btn) => console.log(btn)} />,
  ).toJSON();

  const numColumn = TestRenderer.create(
    <NumColumn
      nums={['1', '2', '3']}
      handleFunc={(btn) => console.log(btn)}
      last={false}
    />,
  ).toJSON();

  const numColumnLast = TestRenderer.create(
    <NumColumn
      nums={['1', '2', '3']}
      handleFunc={(btn) => console.log(btn)}
      last={true}
    />,
  ).toJSON();

  const lastButton = TestRenderer.create(
    <NumButton
      num={'1'}
      last={true}
      special={false}
      handleFunc={(btn) => console.log(btn)}
    />,
  ).toJSON();

  const specialButton = TestRenderer.create(
    <NumButton
      num={'1'}
      last={true}
      special={false}
      handleFunc={(btn) => console.log(btn)}
    />,
  ).toJSON();

  it('Testing whole App UI', () => {
    expect(app).toMatchSnapshot();
  });

  it('Testing normal button UI', () => {
    expect(normalButton).toMatchSnapshot();
  });

  it('Testing last button UI', () => {
    expect(lastButton).toMatchSnapshot();
  });

  it('Testing special button UI', () => {
    expect(specialButton).toMatchSnapshot();
  });

  it('Testing number column UI', () => {
    expect(numColumn).toMatchSnapshot();
  });

  it('Testing last number column UI', () => {
    expect(numColumnLast).toMatchSnapshot();
  });

  it('Testing special functions UI', () => {
    expect(specialFunc).toMatchSnapshot();
  });
});
