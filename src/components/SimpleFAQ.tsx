import { useState } from 'react';
import { ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
  links: Array<{ text: string; url: string }>;
}

interface SimpleFAQProps {
  items: FAQItem[];
}

export function SimpleFAQ({ items }: SimpleFAQProps) {
  const [expanded, setExpanded] = useState<string | null>(null);

  const toggle = (id: string) => {
    setExpanded(expanded === id ? null : id);
  };

  return (
    <div className="space-y-4">
      {items.map((item) => (
        <div
          key={item.id}
          className="bg-white border border-neutral-200 rounded-xl overflow-hidden"
        >
          <button
            onClick={() => toggle(item.id)}
            className="w-full flex items-start justify-between p-6 text-left hover:bg-neutral-50 transition-colors"
          >
            <div className="flex-1 pr-4">
              <span className="inline-block px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs mb-2">
                {item.category}
              </span>
              <h3 className="text-neutral-900">{item.question}</h3>
            </div>
            {expanded === item.id ? (
              <ChevronUp className="w-5 h-5 text-neutral-500 flex-shrink-0" />
            ) : (
              <ChevronDown className="w-5 h-5 text-neutral-500 flex-shrink-0" />
            )}
          </button>

          {expanded === item.id && (
            <div className="px-6 pb-6 border-t border-neutral-100">
              <div className="bg-neutral-50 rounded-lg p-4 mb-4 mt-4">
                <p className="text-neutral-700">{item.answer}</p>
              </div>

              {item.links && item.links.length > 0 && (
                <div>
                  <p className="text-sm text-neutral-600 mb-2">Weiterlesen:</p>
                  <div className="space-y-2">
                    {item.links.map((link, index) => (
                      <Link
                        key={index}
                        to={link.url}
                        className="flex items-center gap-2 text-sm text-blue-600 hover:underline"
                      >
                        <ExternalLink className="w-3 h-3" />
                        {link.text}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
