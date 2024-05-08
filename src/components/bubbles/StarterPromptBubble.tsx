// type Props = {
//   prompt: string;
//   onPromptClick?: () => void;
// };
// export const StarterPromptBubble = (props: Props) => (
//   <>
//     <div
//       data-modal-target="defaultModal"
//       data-modal-toggle="defaultModal"
//       class="flex justify-start items-start animate-fade-in host-container hover:brightness-90 active:brightness-75"
//       onClick={() => props.onPromptClick?.()}
//     >
//       <span
//         class="px-2 py-1 ml-1 whitespace-pre-wrap max-w-full chatbot-host-bubble"
//         data-testid="host-bubble"
//         style={{
//           width: 'max-content',
//           'font-size': '15px',
//           'border-radius': '15px',
//           cursor: 'pointer',
//         }}
//       >
//         {props.prompt}
//       </span>
//     </div>
//   </>
// );
type Props = {
  prompt: string;
  onPromptClick?: () => void;
};

export const StarterPromptBubble = (props: Props) => (
  <>
    <div
      data-modal-target="defaultModal"
      data-modal-toggle="defaultModal"
      class="flex justify-start items-start animate-fade-in host-container hover:brightness-90 active:brightness-75"
      onClick={() => {
        props.onPromptClick?.();
        playClickSound(); // Play sound when clicked
      }}
      style={{
        "flex-direction": 'column', // Change to vertical layout
        "padding": '10px', // Add some padding
        "box-shadow": '0px 0px 10px rgba(0, 0, 0, 0.1)', // Add shadow for depth
        "border-radius": '15px', // Rounded corners
         cursor: 'pointer',
        "max-width": 'fit-content',
      }}
    >
      <span
        class="px-2 py-1 ml-1 whitespace-pre-wrap max-w-full chatbot-host-bubble"
        data-testid="host-bubble"
        style={{
          'font-size': '15px', // Change font size property name
        }}
      >
        {props.prompt}
      </span>
    </div>
  </>
);

// Function to play click sound
const playClickSound = () => {
  const audio = new Audio('/DflowChatEmbed/multi-pop-1-188165.mp3'); // Replace with actual path
  audio.play();
};

