import Icon from '@/Components/Icon';
import QuestionOption, { QuestionOptionData } from './QuestionOption';

export type QuestionType = 'multiple_choice';

export interface QuestionData {
    id: number;
    text: string;
    type: QuestionType;
    options: QuestionOptionData[];
    isExpanded: boolean;
    points?: number;
}

interface QuestionCardProps {
    question: QuestionData;
    index: number;
    onToggle: (id: number) => void;
    onDelete: (id: number) => void;
    onDuplicate: (id: number) => void;
    onQuestionTextChange: (id: number, text: string) => void;
    onOptionChange: (
        questionId: number,
        optionId: number,
        text: string,
    ) => void;
    onOptionSelect: (questionId: number, optionId: number) => void;
    onOptionRemove: (questionId: number, optionId: number) => void;
    onAddOption: (questionId: number) => void;
}

export default function QuestionCard({
    question,
    index,
    onToggle,
    onDelete,
    onDuplicate,
    onQuestionTextChange,
    onOptionChange,
    onOptionSelect,
    onOptionRemove,
    onAddOption,
}: QuestionCardProps) {
    // Collapsed State
    if (!question.isExpanded) {
        return (
            <div
                onClick={() => onToggle(question.id)}
                className="group flex cursor-pointer items-center gap-4 rounded-xl border border-slate-200 bg-white p-4 transition-shadow hover:shadow-md"
            >
                {/* Drag Handle */}
                <div className="cursor-move text-slate-300">
                    <Icon name="drag_indicator" size={20} />
                </div>

                {/* Question Preview */}
                <div className="flex flex-1 flex-col gap-2 sm:flex-row sm:items-center sm:gap-6">
                    <div className="flex items-center gap-3">
                        <span className="text-xs font-bold uppercase tracking-wide text-slate-400">
                            Q{index + 1}
                        </span>
                        <p className="line-clamp-1 text-sm font-medium text-slate-700">
                            {question.text || 'Untitled Question'}
                        </p>
                    </div>
                </div>

                {/* Expand Icon */}
                <div className="flex items-center gap-4">
                    <Icon
                        name="expand_more"
                        size={20}
                        className="text-slate-400"
                    />
                </div>
            </div>
        );
    }

    // Expanded State
    return (
        <div className="group relative rounded-xl border-l-4 border-primary bg-white p-6 shadow-lg ring-1 ring-black/5 transition-all">
            {/* Drag Handle */}
            <div className="absolute left-3 top-6 cursor-move text-slate-300 hover:text-slate-500">
                <Icon name="drag_indicator" size={20} />
            </div>

            <div className="pl-8">
                {/* Card Header */}
                <div className="mb-5 flex items-center justify-between">
                    <h4 className="rounded bg-primary/10 px-2 py-1 text-xs font-bold uppercase tracking-wide text-primary">
                        Question {index + 1}
                    </h4>
                    <div className="flex gap-2">
                        <button
                            type="button"
                            onClick={() => onDuplicate(question.id)}
                            className="rounded-md p-2 text-slate-400 transition-colors hover:bg-primary/5 hover:text-primary"
                            title="Duplicate"
                        >
                            <Icon name="content_copy" size={20} />
                        </button>
                        <button
                            type="button"
                            onClick={() => onDelete(question.id)}
                            className="rounded-md p-2 text-slate-400 transition-colors hover:bg-red-50 hover:text-red-500"
                            title="Delete"
                        >
                            <Icon name="delete" size={20} />
                        </button>
                    </div>
                </div>

                {/* Question Text */}
                <div className="mb-6">
                    <input
                        type="text"
                        value={question.text}
                        onChange={(e) =>
                            onQuestionTextChange(question.id, e.target.value)
                        }
                        placeholder="Enter your question..."
                        className="w-full border-0 border-b-2 border-slate-200 bg-transparent px-0 pb-2 text-lg font-medium text-[#101814] placeholder:text-slate-300 focus:border-primary focus:ring-0"
                    />
                </div>

                {/* Answer Options */}
                <div className="flex flex-col gap-3">
                    <p className="mb-1 text-xs font-semibold text-slate-500">
                        Answer Options
                    </p>

                    {question.options.map((option) => (
                        <QuestionOption
                            key={option.id}
                            option={option}
                            questionId={question.id}
                            onChange={(optId, text) =>
                                onOptionChange(question.id, optId, text)
                            }
                            onSelect={(optId) =>
                                onOptionSelect(question.id, optId)
                            }
                            onRemove={(optId) =>
                                onOptionRemove(question.id, optId)
                            }
                        />
                    ))}

                    {/* Add Option Button */}
                    <button
                        type="button"
                        onClick={() => onAddOption(question.id)}
                        className="mt-1 flex w-fit items-center gap-2 text-sm font-semibold text-primary hover:underline"
                    >
                        <Icon name="add" size={18} />
                        Add Option
                    </button>
                </div>

                {/* Collapse Button */}
                <div className="mt-6 border-t border-slate-100 pt-4">
                    <button
                        type="button"
                        onClick={() => onToggle(question.id)}
                        className="flex items-center gap-1 text-sm font-medium text-slate-400 hover:text-slate-600"
                    >
                        <Icon name="expand_less" size={18} />
                        Collapse
                    </button>
                </div>
            </div>
        </div>
    );
}
