# 高质量组件设计的思考

## 高质量

## 设计方法

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

## 约定 & 规范

- 展示组件以 V 开头。
- 方法从字典里拿

## 组件结构

- App
  - IssueMain
    - 描述
    - 子任务
      - withPermission, withUserService(数据)
        - SubTask(容器)
          - VSubTaskItem
          - VSubTaskQuickCreate
          - VSubTaskFullCreate
          - VSubTaskAssociate
            - VSearchInput
            - VSubTaskSearchItem
            - VNoData
    - 关联缺陷
    - 活动日志
