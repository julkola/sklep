export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      Atrtributes: {
        Row: {
          category_id: number
          id: number
          name: string
        }
        Insert: {
          category_id: number
          id?: number
          name: string
        }
        Update: {
          category_id?: number
          id?: number
          name?: string
        }
        Relationships: [
          {
            foreignKeyName: "Atrtributes_category_id_fkey"
            columns: ["category_id"]
            referencedRelation: "Category"
            referencedColumns: ["id"]
          }
        ]
      }
      Attr_values: {
        Row: {
          attr_id: number
          id: number
          product_id: number
          value: string
        }
        Insert: {
          attr_id: number
          id?: number
          product_id: number
          value: string
        }
        Update: {
          attr_id?: number
          id?: number
          product_id?: number
          value?: string
        }
        Relationships: [
          {
            foreignKeyName: "Attr_values_attr_id_fkey"
            columns: ["attr_id"]
            referencedRelation: "Atrtributes"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "Attr_values_product_id_fkey"
            columns: ["product_id"]
            referencedRelation: "Product"
            referencedColumns: ["id"]
          }
        ]
      }
      Category: {
        Row: {
          id: number
          name: string | null
        }
        Insert: {
          id?: number
          name?: string | null
        }
        Update: {
          id?: number
          name?: string | null
        }
        Relationships: []
      }
      Producer: {
        Row: {
          id: number
          name: string
        }
        Insert: {
          id?: number
          name: string
        }
        Update: {
          id?: number
          name?: string
        }
        Relationships: []
      }
      Product: {
        Row: {
          available: number
          category_id: number | null
          desc: string | null
          id: number
          name: string
          price: number
          producer_id: number | null
        }
        Insert: {
          available: number
          category_id?: number | null
          desc?: string | null
          id?: number
          name: string
          price: number
          producer_id?: number | null
        }
        Update: {
          available?: number
          category_id?: number | null
          desc?: string | null
          id?: number
          name?: string
          price?: number
          producer_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "Product_category_id_fkey"
            columns: ["category_id"]
            referencedRelation: "Category"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "Product_producer_id_fkey"
            columns: ["producer_id"]
            referencedRelation: "Producer"
            referencedColumns: ["id"]
          }
        ]
      }
      Product_variants: {
        Row: {
          id: number
          product_id: number
          value: string
          variant_id: number
        }
        Insert: {
          id?: number
          product_id: number
          value: string
          variant_id: number
        }
        Update: {
          id?: number
          product_id?: number
          value?: string
          variant_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "Product_variants_product_id_fkey"
            columns: ["product_id"]
            referencedRelation: "Product"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "Product_variants_variant_id_fkey"
            columns: ["variant_id"]
            referencedRelation: "Variants"
            referencedColumns: ["id"]
          }
        ]
      }
      Variants: {
        Row: {
          id: number
          name: string
        }
        Insert: {
          id?: number
          name: string
        }
        Update: {
          id?: number
          name?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
