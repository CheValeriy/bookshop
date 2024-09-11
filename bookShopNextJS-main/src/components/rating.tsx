export default function Rating({rating}) {
  return (
    <svg
      width="64"
      height="14"
      viewBox="0 0 64 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 1L7.80568 4.5147L11.7063 5.1459L8.92165 7.9493L9.52671 11.8541L6 10.072L2.47329 11.8541L3.07835 7.9493L0.293661 5.1459L4.19432 4.5147L6 1Z"
        fill={rating >= 1 ? "#F2C94C" : "#EEEDF5"}
      ></path>
      <path
        d="M19 1L20.8057 4.5147L24.7063 5.1459L21.9216 7.9493L22.5267 11.8541L19 10.072L15.4733 11.8541L16.0784 7.9493L13.2937 5.1459L17.1943 4.5147L19 1Z"
        fill={rating >= 2 ? "#F2C94C" : "#EEEDF5"}
      ></path>
      <path
        d="M32 1L33.8057 4.5147L37.7063 5.1459L34.9216 7.9493L35.5267 11.8541L32 10.072L28.4733 11.8541L29.0784 7.9493L26.2937 5.1459L30.1943 4.5147L32 1Z"
        fill={rating >= 3 ? "#F2C94C" : "#EEEDF5"}
      ></path>
      <path
        d="M45 1L46.8057 4.5147L50.7063 5.1459L47.9216 7.9493L48.5267 11.8541L45 10.072L41.4733 11.8541L42.0784 7.9493L39.2937 5.1459L43.1943 4.5147L45 1Z"
        fill={rating >= 4 ? "#F2C94C" : "#EEEDF5"}
      ></path>
      <path
        d="M58 1L59.8057 4.5147L63.7063 5.1459L60.9216 7.9493L61.5267 11.8541L58 10.072L54.4733 11.8541L55.0784 7.9493L52.2937 5.1459L56.1943 4.5147L58 1Z"
        fill={rating === 5 ? "#F2C94C" : "#EEEDF5"}
      ></path>
    </svg>
  );
};

