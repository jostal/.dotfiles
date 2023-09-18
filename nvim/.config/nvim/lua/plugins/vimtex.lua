local M = {
  "lervag/vimtex",
  lazy = false,
  init = function()
    vim.api.nvim_create_autocmd({ "BufRead", "BufNewFile" }, {
      pattern = { "*.tex" },
      callback = function()
        vim.cmd [[VimtexCompile]]
      end,
    })

    -- live compilation
    vim.g.vimtex_compiler_latexmk = {
      out_dir = ".out",
      executable = 'latexmk'
    }
    vim.g.vimtex_view_general_viewer = 'okular'
    vim.g.vimtex_view_general_options = '--unique file:@pdf#src:@line@tex'
    vim.g.vimtex_fold_enabled = true
    vim.g.vimtex_syntax_conceal = {
      accents = 1,
      ligatures = 1,
      cites = 1,
      fancy = 1,
      spacing = 0,
      greek = 1,
      math_bounds = 1,
      math_delimiters = 1,
      math_fracs = 1,
      math_delimiters = 1,
      math_fracs = 1,
      math_super_sub = 1,
      math_symbols = 1,
      sections = 0,
      styles = 1,
    }
  end,
}

return M
