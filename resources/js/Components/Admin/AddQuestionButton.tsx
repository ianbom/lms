import Icon from '@/Components/Icon';

interface AddQuestionButtonProps {
    onClick: () => void;
    className?: string;
}

export default function AddQuestionButton({
    onClick,
    className = '',
}: AddQuestionButtonProps) {
    return (
        <button
            type="button"
            onClick={onClick}
            className={`group flex w-full flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed border-primary/30 py-8 text-primary transition-all hover:border-primary/50 hover:bg-primary/5 ${className}`}
        >
            <div className="rounded-full bg-primary/10 p-3 transition-transform group-hover:scale-110">
                <Icon name="add" size={24} />
            </div>
            <span className="text-sm font-bold">Add New Question</span>
        </button>
    );
}
