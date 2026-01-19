import { Module } from '@/types/module';
import ModuleCard from './ModuleCard';

interface ModuleGridProps {
    modules: Module[];
    onModuleClick?: (module: Module) => void;
}

export default function ModuleGrid({
    modules,
    onModuleClick,
}: ModuleGridProps) {
    return (
        <div className="mb-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {modules.map((module) => (
                <ModuleCard
                    key={module.id}
                    module={module}
                    onDetailClick={onModuleClick}
                />
            ))}
        </div>
    );
}
