import Link from "next/link";
import { ArrowRight } from "lucide-react";
import React from "react";

export const CtaSection: React.FC = () => (
    <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 text-center flex flex-col items-center gap-7">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Начните анонимизацию прямо сейчас</h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-4">Попробуйте инструмент бесплатно — никаких регистраций и ограничений.</p>
            <Link
                href="/anonymize"
                className="button-primary text-base px-10 py-3 rounded-xl inline-flex items-center gap-2 focus-visible:ring-2 focus-visible:ring-primary transition-all duration-150 min-w-[180px] justify-center"
                tabIndex={0}
                aria-label="Начать бесплатно"
            >
                Начать бесплатно <ArrowRight className="h-5 w-5" />
            </Link>
        </div>
    </section>
); 