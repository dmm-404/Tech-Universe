import { motion } from "motion/react";
import { Calendar, CheckCircle, Circle, ArrowRight } from "lucide-react";

export interface TimelineItem {
  id: string;
  date: string;
  title: string;
  description: string;
  status?: 'completed' | 'current' | 'upcoming';
  icon?: React.ReactNode;
  category?: string;
}

interface TimelineProps {
  items: TimelineItem[];
  variant?: 'vertical' | 'horizontal';
  theme?: 'default' | 'minimal' | 'detailed';
}

export const Timeline = ({ 
  items, 
  variant = 'vertical',
  theme = 'default'
}: TimelineProps) => {
  
  if (variant === 'horizontal') {
    return <HorizontalTimeline items={items} theme={theme} />;
  }
  
  return <VerticalTimeline items={items} theme={theme} />;
};

// Vertical Timeline Component
const VerticalTimeline = ({ items, theme }: { items: TimelineItem[], theme: string }) => {
  return (
    <div className="relative max-w-4xl mx-auto px-4 py-12">
      {/* Timeline Line */}
      <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-brand-accent via-brand-border to-brand-background" />
      
      <div className="space-y-12">
        {items.map((item, index) => (
          <TimelineItemComponent 
            key={item.id}
            item={item}
            index={index}
            theme={theme}
            isVertical
          />
        ))}
      </div>
    </div>
  );
};

// Horizontal Timeline Component
const HorizontalTimeline = ({ items, theme }: { items: TimelineItem[], theme: string }) => {
  return (
    <div className="relative max-w-7xl mx-auto px-4 py-12">
      <div className="overflow-x-auto pb-8">
        <div className="flex items-center gap-8 min-w-max">
          {items.map((item, index) => (
            <div key={item.id} className="flex items-center">
              <TimelineItemComponent 
                item={item}
                index={index}
                theme={theme}
                isVertical={false}
              />
              {index < items.length - 1 && (
                <ArrowRight className="mx-4 text-brand-accent" size={24} />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Timeline Item Component
const TimelineItemComponent = ({ 
  item, 
  index, 
  theme,
  isVertical 
}: { 
  item: TimelineItem, 
  index: number, 
  theme: string,
  isVertical: boolean 
}) => {
  const isEven = index % 2 === 0;
  const statusIcon = {
    completed: <CheckCircle className="text-green-500" size={20} />,
    current: <Circle className="text-brand-accent fill-brand-accent" size={20} />,
    upcoming: <Circle className="text-brand-muted" size={20} />
  };

  if (isVertical) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className={`relative flex items-center ${
          isEven ? 'md:flex-row' : 'md:flex-row-reverse'
        } flex-row`}
      >
        {/* Content */}
        <div className={`w-full md:w-1/2 ${
          isEven ? 'md:pr-16 pl-16 md:pl-0' : 'md:pl-16 pl-16 md:pr-0'
        }`}>
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-brand-surface border border-brand-border rounded-xl p-6 shadow-lg hover:shadow-xl transition-all"
          >
            {/* Category Badge */}
            {item.category && (
              <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-brand-accent/20 text-brand-accent mb-3">
                {item.category}
              </span>
            )}
            
            {/* Date */}
            <div className="flex items-center gap-2 text-brand-muted mb-2">
              <Calendar size={16} />
              <span className="text-sm font-medium">{item.date}</span>
            </div>
            
            {/* Title */}
            <h3 className="text-xl font-bold text-brand-foreground mb-2">
              {item.title}
            </h3>
            
            {/* Description */}
            <p className="text-brand-muted leading-relaxed">
              {item.description}
            </p>
          </motion.div>
        </div>
        
        {/* Timeline Node */}
        <div className="absolute left-8 md:left-1/2 w-4 h-4 -ml-2 flex items-center justify-center">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
            className="w-full h-full rounded-full border-4 border-brand-background bg-brand-accent shadow-lg"
          />
        </div>
        
        {/* Status Icon */}
        <div className="absolute left-0 md:left-auto md:right-auto w-8 h-8 flex items-center justify-center">
          {item.status && statusIcon[item.status]}
        </div>
      </motion.div>
    );
  }
  
  // Horizontal layout
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex flex-col items-center min-w-[280px] max-w-xs"
    >
      {/* Timeline Node */}
      <motion.div
        whileHover={{ scale: 1.2 }}
        className="w-12 h-12 rounded-full border-4 border-brand-background bg-brand-accent shadow-lg flex items-center justify-center mb-4"
      >
        {item.status && statusIcon[item.status]}
      </motion.div>
      
      {/* Content */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="bg-brand-surface border border-brand-border rounded-xl p-4 shadow-md hover:shadow-lg transition-all w-full"
      >
        {/* Category Badge */}
        {item.category && (
          <span className="inline-block px-2 py-1 text-xs font-semibold rounded-full bg-brand-accent/20 text-brand-accent mb-2">
            {item.category}
          </span>
        )}
        
        {/* Date */}
        <div className="flex items-center gap-2 text-brand-muted mb-2">
          <Calendar size={14} />
          <span className="text-xs font-medium">{item.date}</span>
        </div>
        
        {/* Title */}
        <h3 className="text-lg font-bold text-brand-foreground mb-2">
          {item.title}
        </h3>
        
        {/* Description */}
        <p className="text-sm text-brand-muted leading-relaxed">
          {item.description}
        </p>
      </motion.div>
    </motion.div>
  );
};

export default Timeline;
