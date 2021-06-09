import { v4 as uuidv4 } from "uuid";
export const initialeState = {
  task: [
    {
      name: "demon Slayer",
      description:
        "After his family was brutally murdered and his sister turned into a demon, Tanjiro Kamados journey as a demon slayer began. Tanjiro and his comrades embark on a new mission aboard the Mugen Train, on track to despair.",
      id: uuidv4(),
      isDone: false,
    },
    {
      name: "attack on titan",
      description:
        "After his hometown is destroyed and his mother is killed, young Eren Jaeger vows to cleanse the earth of the giant humanoid Titans that have brought humanity to the brink of extinction",
      id: uuidv4(),
      isDone: false,
    },
    {
      name: "Death Note",
      description:
        "An intelligent high school student goes on a secret crusade to eliminate criminals from the world after discovering a notebook capable of killing anyone whose name is written into it.",
      id: uuidv4(),
      isDone: false,
    },
  ],
};
