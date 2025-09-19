
const supabase = require('../db/supabaseClient');

module.exports = {
  // READ all
  getAll: async () => {
    const { data, error } = await supabase
      .from('todos')
      .select('id, text');
    if (error) throw error;
    return data;  // [{id, text}, ...]
  },

  // CREATE one (expects {id, text} to match your client shape)
  create: async (todo) => {
    const { data, error } = await supabase
      .from('todos')
      .insert([todo])     // e.g., { id: "1748609...", text: "go to uni" }
      .select('id, text') // <- mutations return null unless you chain .select()
      .single();
    if (error) throw error;
    return data;         // {id, text}
  },

  // UPDATE by id (returns updated row or null if not found)
  update: async (id, updated) => {
    const { id: _ignore, ...patch } = updated ?? {};
    const { data, error } = await supabase
      .from('todos')
      .update(patch)      // e.g., { text: "go to work" }
      .eq('id', id)
      .select('id, text')
      .maybeSingle();     // tolerate 0 rows when id doesn't exist
    if (error) throw error;
    return data || null;
  },

  // DELETE by id
  delete: async (id) => {
    const { error } = await supabase
      .from('todos')
      .delete()
      .eq('id', id);
    if (error) throw error;
  },
};
