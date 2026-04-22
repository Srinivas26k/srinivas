// PLACEHOLDER — replace with real client testimonials
export interface Testimonial {
  id: number;
  quote: string;
  name: string;
  title: string;
  company: string;
  city: string;
  portrait: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "Working with Srinivas transformed our brand from a startup into a category-defining company. The attention to craft is unmatched.",
    name: "Alex Chen",
    title: "Founder & CEO",
    company: "Quantum Systems",
    city: "San Francisco",
    portrait: "/images/testimonial_1.jpg"
  },
  {
    id: 2,
    quote: "The intelligent interface Srinivas designed for our AI platform reduced onboarding time by 40%. Design and systems thinking in perfect balance.",
    name: "Priya Mehta",
    title: "Head of Product",
    company: "Aether Labs",
    city: "London"  ,
    portrait: "/images/testimonial_2.jpg"
  },
  {
    id: 3,
    quote: "Our pitch deck closed a $2M seed round. Clean, bold, and confident — exactly the signal investors needed to see.",
    name: "Marcus Obi",
    title: "Co-Founder",
    company: "Nova Ventures",
    city: "Lagos",
    portrait: "/images/testimonial_3.jpg"
  }
];
