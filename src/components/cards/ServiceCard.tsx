import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
    title: string;
    description: string;
    actionText: string;
}

export default function ServiceCard({ title, description, actionText }: Readonly<ServiceCardProps>) {
    return (
        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group cursor-pointer h-full flex flex-col justify-between">
            <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">{title}</h3>
                <p className="text-gray-600 mb-6">{description}</p>
            </div>
            <div className="flex items-center text-primary font-semibold">
                {actionText} <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </div>
        </div>
    );
}
