<?php /* Smarty version Smarty-3.1.18, created on 2014-10-24 08:47:44
         compiled from "templates\start\header.tpl" */ ?>
<?php /*%%SmartyHeaderCode:229565449f6100d0562-19758520%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    'a067c8539956b41ad6a082ab45142c639b642d7f' => 
    array (
      0 => 'templates\\start\\header.tpl',
      1 => 1414063640,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '229565449f6100d0562-19758520',
  'function' => 
  array (
  ),
  'variables' => 
  array (
    'title' => 0,
    'css_files' => 0,
    'css' => 0,
    'js_files' => 0,
    'js' => 0,
  ),
  'has_nocache_code' => false,
  'version' => 'Smarty-3.1.18',
  'unifunc' => 'content_5449f6101225f6_52695783',
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_5449f6101225f6_52695783')) {function content_5449f6101225f6_52695783($_smarty_tpl) {?><!DOCTYPE html>
</title>
 $_from = $_smarty_tpl->tpl_vars['css_files']->value; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array');}
foreach ($_from as $_smarty_tpl->tpl_vars['css']->key => $_smarty_tpl->tpl_vars['css']->value) {
$_smarty_tpl->tpl_vars['css']->_loop = true;
?>
">
 $_from = $_smarty_tpl->tpl_vars['js_files']->value; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array');}
foreach ($_from as $_smarty_tpl->tpl_vars['js']->key => $_smarty_tpl->tpl_vars['js']->value) {
$_smarty_tpl->tpl_vars['js']->_loop = true;
?>
"></script>