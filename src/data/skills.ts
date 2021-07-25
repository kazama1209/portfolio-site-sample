import { Skill } from "interfaces/index"

export const skills: Skill[] = [
  {
    field: "Frontend",
    coverImage: "/frontend.png",
    logos: [
      {
        title: "TypeScript",
        image: "typescript.png"
      },
      {
        title: "React",
        image: "react.png"
      },
      {
        title: "Next.js",
        image: "nextjs.png"
      }
    ]
  },
  {
    field: "Backend",
    coverImage: "/backend.png",
    logos: [
      {
        title: "Ruby",
        image: "ruby.png"
      },
      {
        title: "Python",
        image: "python.png"
      },
      {
        title: "Node.js",
        image: "nodejs.png"
      },
      {
        title: "MySQL",
        image: "mysql.png"
      }
    ]
  },
  {
    field: "Others...",
    coverImage: "/others.png",
    logos: [
      {
        title: "AWS",
        image: "aws-saa.png"
      },
      {
        title: "CircleCI",
        image: "circleci.png"
      },
      {
        title: "Terraform",
        image: "terraform.png"
      },
      {
        title: "Docker",
        image: "docker.png"
      }
    ]
  }
]
