interface PassingScoreSliderProps {
    value: number;
    onChange: (value: number) => void;
    className?: string;
}

export default function PassingScoreSlider({
    value,
    onChange,
    className = '',
}: PassingScoreSliderProps) {
    return (
        <div
            className={`flex h-full flex-col justify-center rounded-xl border border-primary/10 bg-primary/5 p-5 ${className}`}
        >
            <div className="mb-4 flex items-end justify-between">
                <label className="text-sm font-semibold text-slate-700">
                    Passing Score
                </label>
                <div className="flex items-baseline font-bold text-primary">
                    <span className="text-3xl">{value}</span>
                    <span className="text-lg">%</span>
                </div>
            </div>
            <input
                type="range"
                min={0}
                max={100}
                value={value}
                onChange={(e) => onChange(Number(e.target.value))}
                className="w-full accent-primary"
                style={{
                    background: `linear-gradient(to right, #007537 0%, #007537 ${value}%, #dae7e0 ${value}%, #dae7e0 100%)`,
                }}
            />
            <div className="mt-2 flex justify-between px-1 text-xs font-medium text-slate-400">
                <span>0%</span>
                <span>50%</span>
                <span>100%</span>
            </div>
        </div>
    );
}
