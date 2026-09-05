import { Badge } from "../ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

interface SkillCardProps {
  title: string;
  skills: string[];
}

const SkillCard = ({ title, skills }: SkillCardProps) => {
  return (
    <Card className="border-primary/15 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10">
      <CardHeader>
        <CardTitle className="font-heading text-2xl font-semibold text-primary">
          {title}
        </CardTitle>
      </CardHeader>

      <CardContent className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <Badge
            key={skill}
            className="bg-primary/10 px-3 py-1.5 text-sm font-medium text-primary transition-colors duration-200 hover:bg-primary hover:text-white"
          >
            {skill}
          </Badge>
        ))}
      </CardContent>
    </Card>
  );
};

export default SkillCard;
