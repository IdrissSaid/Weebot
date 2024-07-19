'use client'
import ShinyButton from "@/components/magicui/shiny-button";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";

export default function Form({ handleSubmit, setForm, form }: any) {

  const handleTypeChange = (value: string) => {
    setForm((prev: any) => ({ ...prev, type: value }));
  };

  const handleTemplateChange = (value: string) => {
    setForm((prev: any) => ({ ...prev, template: value }));
  };

  return (
    <>
      <div className="flex justify-center items-center p-2 gap-2">
        <h1>Je veux un site pour</h1>
        <Select onValueChange={handleTypeChange}>
          <SelectTrigger className="w-[150px]">
            <SelectValue placeholder="Select" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="restaurant">un restaurant</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <h1>qui utilise la template</h1>
        <Select onValueChange={handleTemplateChange}>
          <SelectTrigger className="w-[100px]">
            <SelectValue placeholder="Select" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="template1">1</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className="w-full flex items-center justify-center py-6">
        { form.type && form.template &&
          <ShinyButton text="Confirmer" onClick={handleSubmit} />
        }
      </div>
    </>
  )
}
