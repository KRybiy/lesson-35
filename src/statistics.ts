import * as $ from "jquery";

interface Statistics {
  destroy: () => void;
  getClicks: () => number | string;
}

function createStatistics(): Statistics {
  let counter = 0;
  let isDestroyed = false;
  
  const listener = (): number => counter++;
  $(document).on("click", listener);
  
  return {
    destroy() {
      $(document).off("click", listener);
      isDestroyed = true;
      return 'Statistics was fully destroyed'
    },
    getClicks() {
      if (isDestroyed) return "Statistics is destroyed";
      return counter;
    },
  };
}

(window as any).statistics = createStatistics();
