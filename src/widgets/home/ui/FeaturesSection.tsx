import { Users, Fingerprint, Globe, ArrowRight } from "lucide-react";
import React from "react";

const features = [
    {
        icon: <Users className="h-9 w-9 text-primary mb-3" />,
        title: "Локальная обработка",
        description: "Все данные обрабатываются только на вашем устройстве",
    },
    {
        icon: <Fingerprint className="h-9 w-9 text-primary mb-3" />,
        title: "GDPR & безопасность",
        description: "Полное соответствие стандартам защиты данных",
    },
    {
        icon: <Globe className="h-9 w-9 text-primary mb-3" />,
        title: "Мгновенный результат",
        description: "Обработка текстов за секунды, без ожидания",
    },
    {
        icon: <ArrowRight className="h-9 w-9 text-primary mb-3" />,
        title: "Простота использования",
        description: "Интерфейс интуитивно понятен для всех пользователей",
    },
];

export const FeaturesSection: React.FC = () => (
    <section className="py-20 bg-transparent">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
            <div className="text-center mb-14">
                <h2 className="text-3xl md:text-4xl font-bold mb-3 text-foreground">Современные технологии анонимизации</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto text-lg md:text-xl">Передовые алгоритмы и максимальная защита конфиденциальных данных — всё для вашего спокойствия.</p>
            </div>
            <div className="flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-border/40 dark:divide-white/10 bg-white/80 dark:bg-[#181C23] rounded-2xl shadow-sm overflow-hidden">
                {features.map((feature, idx) => (
                    <div
                        key={feature.title}
                        className="flex-1 flex flex-col items-center justify-center text-center px-6 py-10 md:py-8"
                    >
                        {feature.icon}
                        <h3 className="text-lg md:text-xl font-semibold mb-2 text-foreground">{feature.title}</h3>
                        <p className="text-sm md:text-base text-muted-foreground max-w-xs mx-auto">{feature.description}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
); 