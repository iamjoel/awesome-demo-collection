# 高质量组件设计的思考
高质量指：可维护性高的代码。代码很容易调整来适应需求的变化。

目标
* 低耦合，高内聚。
* 合适的抽象，在不影响灵活性的情况下，减少重复代码。

### 为什么
低耦合的代码，某个组件改后，不需要改一堆代码。高耦合的代码，则需要改一堆。

### 怎么做
依赖抽象而不依赖具体实现。如，父组件主动调用子组件，用属性的变化（抽象），而不是子组件的方法(具体实现）。下面是父组件让子组件中的输入框获得焦点的例子。
```js
// TODO
```

## 合适的抽象，在不影响灵活性的情况下，减少重复代码
### 为什么
重复代码出问题时，要把所有重复的地方改一遍，浪费时间，容易漏改，导致出错。
不合适的抽象(复用），改公用代码，是为了改某个问题，但可能没有考虑全所有这代码的场景。

### 怎么做

对组件进行分类的目的，是为了更好的复用。

组件按职责分类：

- 容器类组件。
- 展示类组件。
- 数据组件。

### 容器组件

容器组件是把数据的和展示粘合在一起，也就是控制器。容器类组件一般包含：

- 多个相同子组件。也就是列表组件。
- 多个不同子组件。

#### 属性的设计

列表组件属性：

- itemProps
- renderItem

itemProps 和 renderItem 二选一。renderItem 的定制性比 itemProps 更高。

多个不同子组件:

- includeItems: `string[]`。 包含的组件名称。顺序与数组顺序一致。
- [item]Props: 某个子组件的属性。
- render[item]: 渲染子组件。

[item]Props 和 render[item] 二选一。

### 展示组件

只获取数据来渲染，不改数据。

### 数据组件

数据组件给容器组件上提供数据和操作数据的方法。如：

```ts
interface IUserListProps {
  permission: ...// 权限数据。@withPermission 提供
  userList: ...// 用户列表数据。@withUserService 提供
  fetchUserList: ... // 获取用户数据。 @withUserService 提供
}

@withPermission
@withUserService
class UserList extends React.Component(<IUserListProps>) {
  componentDidMount() {
    this.props.fetchUserList()
  }

  render() {
    const {userList} = this.props
    return (
      <div>...</div>
    )
  }
}
```

### 适应变化的具体实例
TODO: 描述优化。  
item 只实现外层的ui，左右的给父组件，commonitem 调用 item，subtaskitem 调用commonitem，传入获取数据的方法。 subtaskitem 和commonitem 分叉的很大后，从 commonitem是拷贝一份出来改。

## 约定 & 规范

- 展示组件以 V 开头。
- 方法从字典里拿

## 组件结构
- RequirementDetail, AssignmentDetail, DefectDetail
  - 左侧 Main。 
    - 头部按钮
    - 描述
    - 子任务
      - withPermission
        - SubTask
          - Header 头
          - SubTaskList 列表
            - SubTaskItem
              - ItemStatus
                - Dropdown
                  - PortalToFollowElem
          - SubTaskQuickCreate 快速创建
            - QuickCreate
              - Input
                - ConfirmButton
                - CancelButton
          - SubTaskFullCreate 完成创建
            - FullCreate
              - Dialog
                - ConfirmButton
                - CancelButton
          - SubTaskAssociate 关联已有
            - Associate
              - SearchInput
              - Dropdown
                - SubTaskSearchItem
              - NoData
    - 关联缺陷
    - 活动日志
  - 右侧 Slide

## 文件结构
- src
  - components 项目通用组件。不带业务逻辑。
  - container 页面 & 页面通用组件
    - main
      - 页面组件1
        - components 页面专用组件
      - ...
    - components 页面通用组件
    - assets

## 具体场景
对于容器类组件中的数据，有些从接口拿数据，为了灵活性，控制器内部去获取，也会从
```js
<XXList
  list={} // 可选。初始化从接口获取的数据
  fetchList={} // 可选。内部有
  onLoaded={}

>
</XXList>
```

## 属性的分类
1 和外部的数据的交互
* fetchList, fetchDetail, updateItem, deleteItem
* list, data ...

2 主动调用子组件
* ref
* controlFocus...

3 子组件通知父组件 & 改组件的值
* onClick, onChange, onLoad, onError ...
* setList ...

4 控制部分子组件的 UI & 特性
* renderHeader, renderItem ...
* className, style
* readOnly, disabled,

## 列表类组件支持的功能
* 虚拟列表 - done。
* 脱拽
* 子项中
  *  Dropdown 要 Portal 出去
  *  Dropdown 的数据，要惰性调用接口，即在显示时再接口。