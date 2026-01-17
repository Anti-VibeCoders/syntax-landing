// This is an example data, this will change in the future
import {
  Code2,
  Workflow,
  BrainCircuit,
  Activity,
  TrendingUp,
  Puzzle,
} from "lucide-react";

export const services = [
  {
    title: "Full Stack Development",
    description:
      "Whether you are building a simple website or a complex web application, our team provides scalable solutions tailored to your needs, ensuring your project is robust.",
    icon: <Code2 className="w-6 h-6" />,
    color: "text-blue-400",
    shadow: "shadow-blue-400/50",
  },
  {
    title: "Automated Workflows",
    description:
      "We design and implement intelligent automation workflows that reduce manual effort, eliminate errors, and improve operational efficiency across your organization.",
    icon: <Workflow className="w-6 h-6" />,
    color: "text-green-400",
    shadow: "shadow-green-400/50",
  },
  {
    title: "AI Agent Development",
    description:
      "We build custom AI agents tailored to your business needs, capable of reasoning, interacting with systems, and delivering real-time intelligent assistance.",
    icon: <BrainCircuit className="w-6 h-6" />,
    color: "text-purple-400",
    shadow: "shadow-purple-400/50",
  },
  {
    title: "Real-Time Intelligence",
    description:
      "Gain actionable insights from live data streams and dashboards, enabling faster and smarter decision-making in dynamic environments.",
    icon: <Activity className="w-6 h-6" />,
    color: "text-red-400",
    shadow: "shadow-red-400/50",
  },
  {
    title: "AI Strategy Consulting",
    description:
      "We help organizations define and execute effective AI strategies aligned with their business goals, ensuring measurable impact and long-term value.",
    icon: <TrendingUp className="w-6 h-6" />,
    color: "text-yellow-400",
    shadow: "shadow-yellow-400/50",
  },
  {
    title: "System Integration",
    description:
      "We connect your existing systems, services, and data sources into a unified, reliable, and scalable ecosystem.",
    icon: <Puzzle className="w-6 h-6" />,
    color: "text-cyan-400",
    shadow: "shadow-cyan-400/50",
  },
];
