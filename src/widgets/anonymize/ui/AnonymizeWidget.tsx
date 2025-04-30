'use client';

import React from 'react';
import { AnonymizeForm } from '@/features/anonymize/ui/client/AnonymizeForm';
import { Shield, Zap, Lock } from 'lucide-react';

/**
 * Виджет анонимизации для страницы с современным дизайном 2025
 * Объединяет необходимые компоненты и функциональность
 */
export function AnonymizeWidget() {
  return (
    <section className="w-full min-h-[calc(60vh)] flex flex-col items-center justify-center py-4 md:py-12 bg-transparent">
      <div className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center px-1 md:px-4">
        <AnonymizeForm />
        {/* Шаги-инструкция */}
        <div className="w-full mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex flex-col items-center bg-card/80 border border-border/60 rounded-2xl shadow-lg p-6 transition-all duration-300">
            <Shield className="w-8 h-8 text-primary mb-3 mx-auto" style={{ marginBottom: 12 }} />
            <h3 className="font-bold text-lg mb-2 text-center" style={{ marginBottom: 8 }}>1. Вставьте текст</h3>
            <p className="text-muted-foreground text-sm text-center">Скопируйте или введите любой текст, который нужно обезличить.</p>
          </div>
          <div className="flex flex-col items-center bg-card/80 border border-border/60 rounded-2xl shadow-lg p-6 transition-all duration-300">
            <Zap className="w-8 h-8 text-primary mb-3 mx-auto" style={{ marginBottom: 12 }} />
            <h3 className="font-bold text-lg mb-2 text-center" style={{ marginBottom: 8 }}>2. Нажмите «Анонимизировать»</h3>
            <p className="text-muted-foreground text-sm text-center">Система мгновенно обработает данные и скроет все персональные сведения.</p>
          </div>
          <div className="flex flex-col items-center bg-card/80 border border-border/60 rounded-2xl shadow-lg p-6 transition-all duration-300">
            <Lock className="w-8 h-8 text-primary mb-3 mx-auto" style={{ marginBottom: 12 }} />
            <h3 className="font-bold text-lg mb-2 text-center" style={{ marginBottom: 8 }}>3. Скопируйте результат</h3>
            <p className="text-muted-foreground text-sm text-center">Получите анонимизированный текст — без риска утечки данных.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
