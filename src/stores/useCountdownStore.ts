// stores/useCountdownStore.ts
import { CountdownState } from '@/types/Stores';
import { create } from 'zustand';

let timer: ReturnType<typeof setInterval>;

export const useCountdownStore = create<CountdownState>((set) => ({
  timeLeft: {
    days: 90,
    hours: 0,
    minutes: 0,
    seconds: 0,
  },

  startCountdown: () => {
    clearInterval(timer);
    timer = setInterval(() => {
      set((state) => {
        let { days, hours, minutes, seconds } = state.timeLeft;

        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        } else if (days > 0) {
          days--;
          hours = 23;
          minutes = 59;
          seconds = 59;
        } else {
          clearInterval(timer);
        }

        return { timeLeft: { days, hours, minutes, seconds } };
      });
    }, 1000);
  },

  stopCountdown: () => {
    clearInterval(timer);
  },
}));
