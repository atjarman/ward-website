import { useEffect } from 'react';
import config from '../config/_about.json';
import LeaderItem from '../components/LeaderItem';
import ActionButton from '../components/ActionButton';

export default function About() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <h1 className="text-center py-2 church-font font-lg">Ward Leadership</h1>
      <div className="condensed-text">
        {config.leadership.map((leader, index) => <LeaderItem key={index} leader={leader} />)}
      </div>

      <div className="text-center text-stone-800 mt-8 italic">
        * Appointments with Bishop can be made over the phone with Brother Jarman or online:
      </div>

      <ActionButton link={config.scheduleLink} text="Schedule With Bishop" />

      {/* TODO: Add section for our missionaries and their contact info. Maybe even a little avatar of them here w/ their assigned mission and dates */}
    </div>
  )
};