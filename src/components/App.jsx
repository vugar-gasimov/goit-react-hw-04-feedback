import React, { useState } from 'react';

import { Statistics } from './Feedback-Widget/Statistics';
import { Notification } from './Feedback-Widget/Notification';
import { FeedbackOptions } from './Feedback-Widget/FeedbackOptions';
import { Section } from './Feedback-Widget/Section';
import { FeedbackContainer } from './AppStyled.Styled';

export const App = () => {
 const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);
  const [showAppreciation, setShowAppreciation] = useState(false);
  const options = ['Good', 'Neutral', 'Bad'];
  const handleLeaveFeedback = option => {
    // this.setState(
    //   prevState => ({
    //     [option]: prevState[option] + 1,
    //     showAppreciation: true,
    //   }),
    //   () => {
    //     const { good, neutral, bad } = this.state;
    //     const total = good + neutral + bad;
    //     const positive = total > 0 ? Math.round((good / total) * 100) : 0;
    //     this.setState({ total, positive });
    //   }
    // );
    
      setShowAppreciation(showAppreciation: true),
setTotal(prevState => prevState + 1),
      switch
    good + 1
    break
    neutral + 1
    break
    bad + 1
    break

    if (total > 0) {
      Math.round((good / total) * 100): 0;
    }
    setPositive(positive)
     setTotal(total)
    

  };
  return (
    <FeedbackContainer>
      <h1>Please leave feedback</h1>

      <Section title="Feedback Options">
        <FeedbackOptions
          options={options}
          onLeaveFeedback={handleLeaveFeedback}
        />
      </Section>

      <Section title="Statistics">
        {total > 0 ? (
          <>
            <Notification
              message={'We appreciate your feedback 😊'}
              appreciation={showAppreciation}
            />
            <Statistics />
          </>
        ) : (
          <Notification message={'There is zero feedback 😔'} />
        )}
      </Section>
    </FeedbackContainer>
  );
};

// export class App extends React.Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//     showAppreciation: false,
//   };

// handleLeaveFeedback = option => {
//   this.setState(
//     prevState => ({
//       [option]: prevState[option] + 1,
//       showAppreciation: true,
//     }),
//     () => {
//       const { good, neutral, bad } = this.state;
//       const total = good + neutral + bad;
//       const positive = total > 0 ? Math.round((good / total) * 100) : 0;
//       this.setState({ total, positive });
//     }
//   );
// };

//   render() {
//     const { total } = this.state;
//     const options = ['good', 'neutral', 'bad'];

//     return (
// <FeedbackContainer>
//   <h1>Please leave feedback</h1>

//   <Section title="Feedback Options">
//     <FeedbackOptions
//       options={options}
//       onLeaveFeedback={this.handleLeaveFeedback}
//     />
//   </Section>

//   <Section title="Statistics">
//     {total > 0 ? (
//       <>
//         <Notification
//           message={'We appreciate your feedback 😊'}
//           appreciation={this.state.showAppreciation}
//         />
//         <Statistics {...this.state} />
//       </>
//     ) : (
//       <Notification message={'There is zero feedback 😔'} />
//     )}
//   </Section>
// </FeedbackContainer>
//     );
//   }
// }
